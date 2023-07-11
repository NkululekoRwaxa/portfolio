import Gallery from '../../assets/gallery.png';
import MERN from '../../assets/movies.png';
import Signin from '../../assets/signin.png';
import WeatherApp from '../../assets/weatherapp.png';
import BlogPost from '../../assets/blogpost.jpg';
import Cart from '../../assets/cart.jpg';

const data = [
    {
      id:1,
      image: WeatherApp,
      title: 'React Weather App',
      github: 'https://github.com/NkululekoRwaxa/weather_app',
      demo: 'https://weather-app-rwaxa.netlify.app/',
      info:'Live React Weather app that uses OpenWeatherMap API. '+
      'Users can easily get the weather information like temperature by '+
      'typing CITY name into the input field. NOTE app response might be slow.'
    },
    {
      id:2,
      image: Gallery,
      title: 'Portfolio Gallery',
      github: 'https://github.com/NkululekoRwaxa/portfolio_gallery',
      demo: 'https://portfolio-gallery-rwaxa.netlify.app/',
      info:'Dynamic portfolio gallery app with filtering by category, built with React js & Bootstrap. '+
      'This app filters the static data using functional components.'
    },
    {
      id:3,
      image: Signin,
      title: 'Simple Login Form',
      github: 'https://github.com/NkululekoRwaxa/login_form',
      demo: 'https://login-form-rwaxa.netlify.app/',
      info:'Login form created with React js that has form validation and error messages. Try username:\'user1\', password: \'pass1\'. '
    },
    {
      id:4,
      image: MERN,
      title: 'MERN Stack Project',
      github: 'https://github.com/NkululekoRwaxa/movie_reviews',
      demo: 'https://frontend-rwaxa.netlify.app/',
      info: 'Movie reviews app which lets users view and search for movies. '+
      'This app uses sample data (sample_mflix) from MongoDB Atlas. '+
      'Backend runs separately and is hosted on Render. '+
      'Frontend runs separately and is hosted on Netlify. Users must register/login to add movie reviews.'
    },
    {
      id:5,
      image: BlogPost,
      title: 'MERN Stack Project',
      github: 'https://github.com/NkululekoRwaxa/blogpost',
      demo: 'https://new-blog-post.onrender.com/',
      info:'Blog App which lets users write blog entries once they sign up with an account.'+
      'After the user registers, they can go to the homepage and login with their credentials.'
    },
    {
      id:1,
      image: Cart,
      title: 'React Project',
      github: 'https://github.com/NkululekoRwaxa/shopping_cart',
      demo: 'https://shopping-cart-rwaxa.netlify.app/',
      info:'Simple Shopping Cart built with only React. Users can add/remove selected items in a cart.'+ 
      'This App was to learn basics of React, creating & composing Components, working with Array methods '+
      'like map(), reduce(), and filter(). App is not 100% functional.'
    }
  ];

  export default data;