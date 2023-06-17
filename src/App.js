import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
      <Video 
      likes={312}
      messages={548}
      shares={121}
      name="Eminem"
      description= "Live from Detroit"
      music="Eminem - Sing For The Moment"
      url="https://video-eminem.vercel.app/download.mp4"
      />
      <Video 
       likes={212}
       messages={125}
       shares={121}
       name="Snoop Dogg"
       description= "Eminem and Snoop Dogg"
       music="Eminem & Snoop Dogg - From The D 2 The LBC"
       url="https://video-eminem.vercel.app/download_01.mp4"
      />
      <Video 
       likes={321}
       messages={352}
       shares={121}
       name="NFL"
       description= "Dr. Dre, Snoop Dogg, Eminem, Mary J. Blige, Kendrick Lamar & 50 Cent FULL Pepsi SB LVI Halftime Show"
       music="Dr. Dre - Still D.R.E. ft. Snoop Dogg"
       url="https://video-eminem.vercel.app/download_02.mp4"
      />
      </div>
    </div>
  );
}

export default App;