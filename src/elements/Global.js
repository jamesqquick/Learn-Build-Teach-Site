import { createGlobalStyle} from "styled-components";
import { black, primary } from "../utilities/Colors";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
        font-family: roboto;
    }

    body {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4{
        color: ${black};
        font-family: oswald;
        letter-spacing: 2px;
    }

    p {
        color: ${black};
        font-weight: 300;
        font-size:1.6rem;
    }
    a {
      font-size: 1.6rem;
    }

    a:hover {
        cursor: pointer;
    }

    h1 {
        font-size: 5.4rem;
        margin: 0;
    }

    h2 {
        font-size: 4.2rem;
        margin: 0;
    }

    h3 {
        font-size: 3.6rem;
        margin-bottom: 2rem;
    }

    h4 {
        font-size: 2.8rem;
        margin-bottom: 2rem;
    }

    a {
        text-decoration: none;
        /* border-bottom: 2px solid ${primary}; */
        color: ${primary};
        font-weight:500;
    }

    a:visited {
        color: ${primary};
    }


.container {
  max-width: 1400px;
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