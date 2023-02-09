import { Box, Button, CircularProgress, createTheme, MenuItem, Select, ThemeProvider } from '@mui/material'
import type { HTMLAttributes, ReactNode } from 'react'
import React, { useMemo, useState } from 'react'
import type { ReplaySubject } from 'rxjs'

import type { ValidationError, ModelType } from '../lib/editor'
import { isModelType, useEditor } from '../lib/editor'
import type { Render } from '../lib/iframe'

import CompressedIcon from './CompressedIcon'

interface EditorProps extends HTMLAttributes<HTMLDivElement> {
  render: ReplaySubject<Render>
}

const ModelTypeSelect = Select<ModelType>

const MLC_SESSION_FORMAT_KEY = '@microlc:editorFormat'

const DEFAULT_MODEL_TYPE: ModelType = 'json'

const getStoredModelType = (self: Window): ModelType => {
  const format = self.sessionStorage.getItem(MLC_SESSION_FORMAT_KEY)
  return isModelType(format) ? format : DEFAULT_MODEL_TYPE
}

const setStoredModelType = (self: Window, value: ModelType) =>
  self.sessionStorage.setItem(MLC_SESSION_FORMAT_KEY, value)

const convert: Record<string, string> = {
  'components.editor.error': 'Error while applying changes',
  'components.editor.error.conversion': 'Error while converting the model',
  'components.editor.warning': 'Configuration does not comply',
}

const getError = (error: ValidationError | string | undefined): ReactNode => {
  if (!error) {
    return
  }

  if (typeof error === 'string') {
    return error
  }

  if (error.error) {
    return (
      <>
        <CompressedIcon color='var(--playground-color-red)' height={12} id='errorFilled' width={12} />
        <span>{convert[error.messages.join('\n')]}</span>
      </>
    )
  }

  if (error.messages.length !== 0) {
    return (
      <>
        <CompressedIcon color='var(--playground-color-orange)' height={12} id='warningFilled' width={12} />
        <span>{convert[error.messages.join('\n')]}</span>
      </>
    )
  }
}

const theme = createTheme({
  palette: {
    primary: {
      dark: '#c81c83',
      light: '#e3349d',
      main: '#de1f92',
    },
  },
})

const Editor: React.FC<EditorProps> = ({ style, render, ...props }) => {
  const initialModelType = useMemo(() => getStoredModelType(window), [])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<ValidationError | string | undefined>('')

  const { editorRef, dispatchSubmit, dispatchReset, handleChangeModel } = useEditor(
    render,
    initialModelType,
    { errorMessage: setErrorMessage, loading: setLoading },
  )

  return (
    <div
      {...props}
      style={{
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          alignItems='center'
          display={loading ? 'flex' : 'none'}
          flexDirection='column'
          flexGrow='1'
          justifyContent='center'
          width='100%'
        >
          <CircularProgress />
        </Box>
        <div
          ref={(innerRef) => { editorRef.current = innerRef }}
          style={{
            boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
            display: loading ? 'none' : '',
            flexGrow: 1,
            width: '100%',
          }}
        ></div>
        <div style={{ alignItems: 'baseline', display: 'flex', gap: '16px', padding: '16px 24px', textAlign: 'center' }}>
          <ModelTypeSelect
            defaultValue={initialModelType}
            onChange={({ target: { value } }) => {
              const nextModel = value as ModelType
              handleChangeModel(nextModel)
              setStoredModelType(window, nextModel)
            }}
            size='small'
          >
            <MenuItem value={'json'}>JSON</MenuItem>
            <MenuItem value={'yaml'}>YAML</MenuItem>
          </ModelTypeSelect>
          <div style={{ flexGrow: 1 }} />
          <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>{getError(errorMessage)}</div>
          <Button onClick={dispatchSubmit} variant='contained'>{'Apply'}</Button>
          <Button onClick={dispatchReset} variant='contained'>{'Reset'}</Button>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Editor
