import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  card1={
    title:"DSA to Development",
    title_des: "DSA to Development:A Complete Guide",
    level:"Beginner to Advance",
    interest:"385k+interested Geeks",
    buttondetails:"Claim 35%Off Instantly",
    rating:4.5
  }

  card2 = {
    title: "Algorithms to Applications",
    title_des: "Algorithms to Applications: A Comprehensive Journey",
    level: "Beginner to Expert",
    interest: "450k+ aspiring developers",
    buttondetails: "claim 40% Off Instantly",
    rating: 4.7,
    short_title: "Algorithms to Applications"
}

card3 = {
    title: "Code Craft DSA Solutions",
    title_des: "Code Craft: Elevate Your Coding Skills",
    level: "Intermediate to Advanced",
    interest: "300k+ coding enthusiasts",
    buttondetails: "Claim 30% Instantly",
    rating: 4.6,
    short_title: "Code Craft DSA Solutions"
}

card4 = {
    title: "Algorithmic Thinking",
    title_des: "Algorithmic Thinking: Tackling Modern Challenges",
    level: "All Levels Welcome",
    interest: "500k+ curious minds",
    buttondetails: "Claim 25% Off Instantly",
    rating: 4.8,
    short_title: "Algorithmic Thinking"
}

card5 = {
    title: "DSA Essentials Toolkit",
    title_des: "DSA Essentials: Improve Your Development Workflow",
    level: "Beginner to Intermediate",
    interest: "200k+ tech learners",
    buttondetails: "Claim 20% Instantly",
    rating: 4.5,
    short_title: "DSA Essentials Toolkit"
}

card6 = {
    title: "Hands-On Data Structures",
    title_des: "Data Structures: Integrate Principles with Practice",
    level: "Practical for All Levels",
    interest: "350k+ project-driven learners",
    buttondetails: "Claim 35% Off Instantly",
    rating: 4.9,
    short_title: "Hands-On Data Structures"
}


}
