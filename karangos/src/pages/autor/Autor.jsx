import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import FavoriteIcon from '@mui/icons-material/Favorite'

// importei minha foto
import FotoAutor from '../../assets/FotoAutor.jpg'

export default function Autor() {
  // Estado dos likes lendo do localStorage
  const [likes, setLikes] = React.useState(() => {
    const salvou = localStorage.getItem('likes')
    if(salvou) {
      return Number(salvou)
    } else {
      return 0
    }
  })

  // salva no localStorage quando muda
  React.useEffect(() => {
    localStorage.setItem('likes', likes)
  }, [likes])

  function curtir() {
    setLikes(likes + 1)
  }

  return (
    <div>
      <Typography variant="h1">
        Sobre o autor
      </Typography>


      <Card style={{ width: '350px'}}>
        <img 
          src={FotoAutor} 
          style={{ 
            width: '350px',
            height: '300px'
          }} 
        />

        <CardContent>
          <Typography variant="h5">
            Marcus Vinicius de Sousa Alves
          </Typography>
          
          <Typography variant="body2" style={{ marginTop: '10px' }}>
            Sou estudante de Análise e Desenvolvimento de Sistemas na Fatec Franca. 
            Estou aprendendo React e desenvolvimento web.
          </Typography>
        </CardContent>

        <div>
          <Button 
            startIcon={<FavoriteIcon />}
            onClick={curtir}
            style={{ 
              backgroundColor: '#f50057', 
              color: 'white' 
            }}
          >
            Curtir ({likes})
          </Button>
        </div>
      </Card>
    </div>
  )
}