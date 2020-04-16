import React, { Component } from "react";
import Card from "./card";

export class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {

      data: [
        {
          name: "Truck Tracking System with Realtime API",
          desc:
            "Truck Tracking System with Realtime API from mystral and have featurs like Filtering and Searching. Used Google Maps in React & Used Ant Design for UI Framework.",
          img: "/project-demo/truck.png",
          demoLink: "https://trucktrackingapp.netlify.com/",
          codeLink: "https://github.com/dipanshuraz/TruckTrackingApp",
          techstack: [
            "/icons/html-5.svg",
            "/icons/css-3.svg",
            "/icons/javascript.svg",
            "/icons/react.svg",
            "/icons/redux.svg",
            "/icons/mapsdk.png",
            "/icons/antd.png",
          ]
        },
        {
          name: "Movie Ticket Booking app",
          desc:
            "Designed and developed a ticketing system. The system should allow user to select movies from a list. Allow them to select seats. Filter the movies by genre and language.",
          img: "/project-demo/ticket.png",
          demoLink: "https://ticket-system-thinkify.netlify.com/",
          codeLink: "https://github.com/dipanshuraz/ticketing-system",
          techstack: [
            "/icons/html-5.svg",
            "/icons/css-3.svg",
            "/icons/bootstrap.svg",
            "/icons/javascript.svg",
          ]
        },
        {
          name: "Appointment booking app",
          desc:
            "Online Appointment booking system or appointment management software that allows to schedule slots according to you and accept online appointments",
          img: "/project-demo/aba.png",
          demoLink: "https://appointmentbookingapp.netlify.com/",
          codeLink: "https://github.com/dipanshuraz/appointment-booking-app-reactJS",
          techstack: [
            "/icons/html-5.svg",
            "/icons/css-3.svg",
            "/icons/bootstrap.svg",
            "/icons/javascript.svg",
            "/icons/react.svg",
            "/icons/redux.svg",
            "/icons/firebase.svg",
            "/icons/figma.svg"
          ]
        },
        {
          name: "ShopKart App",
          desc: "Online E-commerce webiste for trending fashion lovers",
          img: "/project-demo/shopkart.png",
          demoLink: "https://shopkartdemo.netlify.com/",
          codeLink: "https://github.com/dipanshuraz/shopKart",
          techstack: [
            "/icons/html-5.svg",
            "/icons/css-3.svg",
            "/icons/javascript.svg",
            "/icons/react.svg"
          ]
        },
        {
          name: "To Do App",
          desc:
            "To do App is a great app with a straightforward and easy-to-use interface that enables quick and simple task management",
          demoLink: "https://todoappredux.netlify.com",
          codeLink: "https://github.com/dipanshuraz/To-Do-App",
          img: "/project-demo/todo.png",
          techstack: [
            "/icons/html-5.svg",
            "/icons/css-3.svg",
            "/icons/javascript.svg",
            "/icons/react.svg",
            "/icons/redux.svg"
          ]
        },
        {
          name: "Deepanshu - portfolio",
          desc: "I have Created my own porfolio using React JS",
          demoLink: "https://codersadhu.tech/",
          img: "/project-demo/portfolio.png",
          codeLink: "https://github.com/dipanshuraz/Portfolio-reactJS",
          techstack: [
            "/icons/html-5.svg",
            "/icons/css-3.svg",
            "/icons/bootstrap.svg",
            "/icons/javascript.svg",
            "/icons/react.svg"
          ]
        },
        {
          name: "Slack Landing Page clone",
          img: "/project-demo/slc.png",
          desc: "My First React App, A try to Clone Slack Landing Page",
          demoLink: "https://slacklandingpageclone.netlify.com/",

          codeLink: "https://github.com/dipanshuraz/SlackLandingPageClone",
          techstack: [
            "/icons/html-5.svg",
            "/icons/css-3.svg",
            "/icons/bootstrap.svg",
            "/icons/javascript.svg",
            "/icons/react.svg"
          ]
        },
        {
          name: "Currency Converter React JS",
          desc:
            "Currency Converter is the simplest, most beautiful currency converter App you'll ever find. It supports over 150 different currencies from all around the world, ranging from the US Dollar to the Colombian Peso!",
          img: "/project-demo/cc.png",
          demoLink: "https://currencyconverterreactjs.netlify.com/",
          codeLink: "https://github.com/dipanshuraz/Currency-Converter-ReactJS",
          techstack: [
            "/icons/html-5.svg",
            "/icons/css-3.svg",
            "/icons/javascript.svg",
            "/icons/react.svg"
          ]
        },
        {
          name: "Movie DB App",
          desc:
            "Created a Movie Database App using The OMDb API, which is a RESTful web service to obtain movie information",
          img: "/project-demo/mda.png",
          demoLink: "https://moviedbappdemo.netlify.com/",
          codeLink: "https://github.com/dipanshuraz/MovieDBApp",
          techstack: [
            "/icons/html-5.svg",
            "/icons/css-3.svg",
            "/icons/javascript.svg"
          ]
        },
        {
          name: "Currency Converter JS",
          desc:
            "Currency Converter is the simplest, most beautiful currency converter App you'll ever find. It supports over 150 different currencies from all around the world, ranging from the US Dollar to the Colombian Peso!",
          img: "/project-demo/cc.png",
          demoLink: "https://currencyconverterjs.netlify.com/",
          codeLink: "https://github.com/dipanshuraz/CurrencyConverterJS",
          techstack: [
            "/icons/html-5.svg",
            "/icons/css-3.svg",
            "/icons/javascript.svg"
          ]
        },
        {
          name: "Chess UI",
          desc: "Creative Design for Web Chess UI",
          demoLink: "https://chessui.netlify.com/",
          img: "/project-demo/chess.png",
          codeLink: "https://github.com/dipanshuraz/ChessUI",
          techstack: [
            "/icons/html-5.svg",
            "/icons/css-3.svg",
            "/icons/javascript.svg"
          ]
        },

        {
          name: "Windows History App",
          desc:
            "A Creative Wiki for Microsoft Windows History & their releases created in pure Html & Css",
          demoLink: "https://windowshistoryweb.netlify.com/",
          img: "/project-demo/wbh.png",
          codeLink: "https://github.com/dipanshuraz/WindowsHistoryWeb",
          techstack: ["/icons/html-5.svg", "/icons/css-3.svg"]
        }
      ]
    };
  }

  componentDidMount() {
    document.title = "Deepanshu | Projects";
  }

  render() {
    return (
      <>
        <div className="container">
          <hr />
          <h2 className="font-weight-bold"># Projects</h2>
          <hr />
          <div className="row">
            {this.state.data.map(elem => {
              return <Card data={elem} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Project;
