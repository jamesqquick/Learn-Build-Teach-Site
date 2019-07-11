import { createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
        font-family: sans-serif;
    }

    body {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    p {
        color: $primary;
    }

    p,
    a {
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 1.5;
    }

    a:hover {
        cursor: pointer;
    }

    h1 {
        font-size: 4.8rem;
        font-weight: 300;
        margin: 0;
    }

    h2 {
        font-size: 3.2rem;
        font-weight: 500;
        margin: 0;
    }

    h3 {
        font-size: 2.8rem;
        margin-bottom: 2rem;
        font-weight: 300;
    }

    h4 {
        font-size: 2.4rem;
        margin-bottom: 2rem;
    }

    a {
        text-decoration: none;
        color: $black;
    }

    a:visited {
        color: $black;
    }


.container {
  max-width: 1000px;
  //padding: 5rem;
  margin: 0 auto;
}

span.highlight {
  font-weight: 700;
}

.text-center {
  text-align: center;
}

.full-width {
  width: 100%;
}

.none {
  display: none;
}

.hidden-sm {
  display: default;
}

.text-danger {
  color: red;
}

@media only screen and (max-width: 768px) {
  .hidden-sm {
    display: none;
  }
}

.shake {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translate(1px, 0px) rotate(0deg);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  40% {
    transform: translate(1px, 0px);
  }
  60% {
    transform: translate(-3px, 0px);
  }
  80% {
    transform: translate(-1px, 0px);
  }
  100% {
    transform: translate(1px, 0px);
  }
}

`;

export default GlobalStyle;