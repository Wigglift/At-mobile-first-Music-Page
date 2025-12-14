import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./Scss/Index.scss";

export default function App() {
  
  const [musics,setMusics] = useState(
    [
  {
    "tittle": "Clint Eastwood",
    "author": "Gorillaz",
    "Album": "Gorillaz",
    "duration": "5:41",
    "image": "http://picsum.photos/250/250?random=1"
  },
  {
    "tittle": "Feel Good Inc.",
    "author": "Gorillaz",
    "Album": "Demon Days",
    "duration": "3:41",
    "image": "http://picsum.photos/250/250?random=2"
  },
  {
    "tittle": "Smells Like Teen Spirit",
    "author": "Nirvana",
    "Album": "Nevermind",
    "duration": "5:01",
    "image": "http://picsum.photos/250/250?random=3"
  },
  {
    "tittle": "Come As You Are",
    "author": "Nirvana",
    "Album": "Nevermind",
    "duration": "3:39",
    "image": "http://picsum.photos/250/250?random=4"
  },
  {
    "tittle": "Bohemian Rhapsody",
    "author": "Queen",
    "Album": "A Night at the Opera",
    "duration": "5:55",
    "image": "http://picsum.photos/250/250?random=5"
  },
  {
    "tittle": "Don't Stop Me Now",
    "author": "Queen",
    "Album": "Jazz",
    "duration": "3:29",
    "image": "http://picsum.photos/250/250?random=6"
  },
  {
    "tittle": "Billie Jean",
    "author": "Michael Jackson",
    "Album": "Thriller",
    "duration": "4:54",
    "image": "http://picsum.photos/250/250?random=7"
  },
  {
    "tittle": "Beat It",
    "author": "Michael Jackson",
    "Album": "Thriller",
    "duration": "4:18",
    "image": "http://picsum.photos/250/250?random=8"
  },
  {
    "tittle": "Lose Yourself",
    "author": "Eminem",
    "Album": "8 Mile",
    "duration": "5:26",
    "image": "http://picsum.photos/250/250?random=9"
  },
  {
    "tittle": "The Real Slim Shady",
    "author": "Eminem",
    "Album": "The Marshall Mathers LP",
    "duration": "4:44",
    "image": "http://picsum.photos/250/250?random=10"
  },
  {
    "tittle": "Creep",
    "author": "Radiohead",
    "Album": "Pablo Honey",
    "duration": "3:58",
    "image": "http://picsum.photos/250/250?random=11"
  },
  {
    "tittle": "Karma Police",
    "author": "Radiohead",
    "Album": "OK Computer",
    "duration": "4:21",
    "image": "http://picsum.photos/250/250?random=12"
  },
  {
    "tittle": "Numb",
    "author": "Linkin Park",
    "Album": "Meteora",
    "duration": "3:07",
    "image": "http://picsum.photos/250/250?random=13"
  },
  {
    "tittle": "In the End",
    "author": "Linkin Park",
    "Album": "Hybrid Theory",
    "duration": "3:36",
    "image": "http://picsum.photos/250/250?random=14"
  },
  {
    "tittle": "Seven Nation Army",
    "author": "The White Stripes",
    "Album": "Elephant",
    "duration": "3:52",
    "image": "http://picsum.photos/250/250?random=15"
  },
  {
    "tittle": "Take On Me",
    "author": "a-ha",
    "Album": "Hunting High and Low",
    "duration": "3:48",
    "image": "http://picsum.photos/250/250?random=16"
  },
  {
    "tittle": "Sweet Child O' Mine",
    "author": "Guns N' Roses",
    "Album": "Appetite for Destruction",
    "duration": "5:56",
    "image": "http://picsum.photos/250/250?random=17"
  },
  {
    "tittle": "Wonderwall",
    "author": "Oasis",
    "Album": "(What's the Story) Morning Glory?",
    "duration": "4:18",
    "image": "http://picsum.photos/250/250?random=18"
  },
  {
    "tittle": "Hey Ya!",
    "author": "Outkast",
    "Album": "Speakerboxxx/The Love Below",
    "duration": "3:55",
    "image": "http://picsum.photos/250/250?random=19"
  },
  {
    "tittle": "Take Me Out",
    "author": "Franz Ferdinand",
    "Album": "Franz Ferdinand",
    "duration": "3:57",
    "image": "http://picsum.photos/250/250?random=20"
  },
  {
    "tittle": "Blinding Lights",
    "author": "The Weeknd",
    "Album": "After Hours",
    "duration": "3:20",
    "image": "http://picsum.photos/250/250?random=21"
  },
  {
    "tittle": "Starboy",
    "author": "The Weeknd",
    "Album": "Starboy",
    "duration": "3:50",
    "image": "http://picsum.photos/250/250?random=22"
  },
  {
    "tittle": "Bad Guy",
    "author": "Billie Eilish",
    "Album": "When We All Fall Asleep, Where Do We Go?",
    "duration": "3:14",
    "image": "http://picsum.photos/250/250?random=23"
  },
  {
    "tittle": "Stressed Out",
    "author": "Twenty One Pilots",
    "Album": "Blurryface",
    "duration": "3:22",
    "image": "http://picsum.photos/250/250?random=24"
  },
  {
    "tittle": "Do I Wanna Know?",
    "author": "Arctic Monkeys",
    "Album": "AM",
    "duration": "4:32",
    "image": "http://picsum.photos/250/250?random=25"
  }
]
  );

  return (
    <div className="App">
      <Header />
      <Main  musics={musics}/>
    </div>
  );
}
