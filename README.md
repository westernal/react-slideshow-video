# react-slideshow-video
a slideshow as a video package in reactjs and nextjs

# usage
```
import SlideShow from '../components/SlideShow'


export default function Home() {

  const imagesArray = [
	
    {src: "/images/50df34b9e93f30269853b96b09c37e3b.jpg"},
		
    {src: "/images/a73d6e4ac85c6a822841e449b24c78e1.jpg"},
		
    {src: "/images/nature-1024x682.jpeg"}
		
  ]

  return (
	
    <SlideShow 
    images = {imagesArray}
    duration = {1000}
    />
		
  )
}
```


