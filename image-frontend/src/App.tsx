import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from '@mui/material/Button';
import ButtonAppBar from './components/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box'
import axios from 'axios'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [file, setFile] = useState<any>(null)
  const [uploadProgress, setUploadProgress] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    if(file != null){
      console.log(file)
    const form = new FormData()
    form.append('file', file, file.name);
    axios.post("http://localhost:8080/api/v1/upload", form, {
      onUploadProgress: (e) => setUploadProgress(e),

    })}
  }, [file])
  return (
    <ThemeProvider theme={darkTheme}>
    <Box
      sx={{
       
        backgroundColor: '#121212',
        height: '100vh'
      }}
    >
      <ButtonAppBar></ButtonAppBar>
      <Button
  variant="contained"
  component="label"
>
  Choose File
  <input
    type="file"
    hidden
    name="f"
    accept="image/*"
    onChange={(e)=> { 
      if(e.target.files != null){
      setFile(e.target.files[0])
      console.log(e)
    }
 }}
  />

</Button>
    </Box>
    </ThemeProvider>
  )
}

export default App
