import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyProjectsService {

  public projects: any[] = [];

  constructor() {

    this.projects = [

      {
        name: "Cryptor Alura",
        description: "A web site that encrypts and decrypts a phrase by a simple algorithm. This project was made for challenge #1 by Alura.",
        technologies: [
          { name: "JavaScript" },
          { name: "HTML" },
          { name: "CSS" }
        ],
        image: "assets/img/cryptorAlura.png",
        url: "https://d240021.github.io/encriptador-allura/"
      },
      // {
      //   name: "Task Manager",
      //   description: "A simple task management application that allows users to create, edit, and delete tasks.",
      //   technologies: [
      //     { name: "Angular" },
      //     { name: "TypeScript" },
      //     { name: "Bootstrap" }
      //   ],
      //   image: "assets/img/taskManager.png",
      //   url: "https://example.com/task-manager"
      // },
      // {
      //   name: "Weather App",
      //   description: "A web application that provides weather forecasts for different cities using a public API.",
      //   technologies: [
      //     { name: "React" },
      //     { name: "JavaScript" },
      //     { name: "CSS" }
      //   ],
      //   image: "assets/img/weatherApp.png",
      //   url: "https://example.com/weather-app"
      // },
      // {
      //   name: "E-commerce Platform",
      //   description: "An e-commerce platform that allows users to browse products, add them to cart, and checkout.",
      //   technologies: [
      //     { name: "Vue.js" },
      //     { name: "Node.js" },
      //     { name: "MongoDB" }
      //   ],
      //   image: "assets/img/ecommerce.png",
      //   url: "https://example.com/ecommerce"
      // },
      // {
      //   name: "Portfolio Website",
      //   description: "A personal portfolio website to showcase projects and skills.",
      //   technologies: [
      //     { name: "HTML" },
      //     { name: "CSS" },
      //     { name: "JavaScript" }
      //   ],
      //   image: "assets/img/portfolio.png",
      //   url: "https://example.com/portfolio"
      // }
    ];
  }
}
