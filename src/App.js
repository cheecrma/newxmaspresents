import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PresentAnimation from "./components/PresentAnimation";
import Instructions from "./pages/Instructions";
import CharacterSelect from "./pages/CharacterSelect";
import Map from "./pages/Map";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animation" element={<PresentAnimation />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/character-select" element={<CharacterSelect />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}


// console.log(`%c\n
// ┊　　┊　　┊ 　 ┊    　┊　   ┊　 ┊
// ┊　　┊　　┊ 　 ☆    　┊　   ┊　 ┊
// ┊　　┊　　 ✬ 　 　   　✬ 　  ┊　 ┊
// ┊　　★ 　　　 　 　    　　　   ★　 ┊
// ☆ 　　 　　　 　 　    　　　　　　 ☆

//   `, `color:blue`);

  // console.log(`%c\n
  //     .⠀⠀⠀⠰⡿⠿⠛⠛⠻⠿⣷
  //     ⠀⠀⠀⠀⠀⠀⣀⣄⡀⠀⠀⠀⠀⢀⣀⣀⣤⣄⣀⡀
  //     ⠀⠀⠀⠀⠀⢸⣿⣿⣷⠀⠀⠀⠀⠛⠛⣿⣿⣿⡛⠿⠷
  //     ⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀⠀⣿⣿⣿⠇
  //     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁
  //     ⠀⠀⠀⠀⣿⣷⣄⠀⢶⣶⣷⣶⣶⣤⣀
  //     ⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠈⠙⠻⠗
  //     ⠀⠀⠀⣰⣿⣿⣿⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⡄
  //     ⠀⣠⣾⣿⣿⣿⣥⣶⣶⣿⣿⣿⣿⣿⠿⠿⠛⠃
  //     ⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
  //     ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁
  //     ⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁
  //     ⠀⠀⠛⢿⣿⣿⣿⣿⣿⣿⡿⠟
  //     ⠀⠀⠀⠀⠀⠉⠉⠉
  //     `, `color:yellow`);

console.log(`%c\n
  ⠀⠀⣾⣿⣿⣷⣄
⠀⢸⣿⣿⣿⣿⣿⣧⣴⣶⣶⣶⣄
⠀⣀⣿⣿⡿⠻⣿⣿⣿⣿⣿⣿⣿⡄     |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|     
⠀⢇ 🎀 ⣿⣿⣿⣿⣿⣿⣿⣧⡀      제작자를 찾으면 선물을 드립니다 ໒꒱*॰
⢀⣷⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷   |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
⢸⣿⣿⡿⢋⠁⠀⠀⠀⠀⠉⡙⢿⣿⣿⡇    
⠘⣿⣿⠀⣿⠇⠀⢀⠀⠀⠘⣿⠀⣿⡿
⠀⠈⠙⠷⠤⣀⣀⣐⣂⣀⣠⠤⠾⠋
      `, `color:pink`);
      
console.log(`%c\n
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡤⠖⠚⠛⠛⠛⠛⠒⠶⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⢶⠒⠒⠒⠦⣄⠀
⠀⠀⠀⠀⢀⡞⠁⠀⠀⠀⠀⠀⠀⠀⡄⠐⡄⠀⠀⡏⠑⡄⠀⠑⣄⠀⠀⠸⡆
⠀⠀⠀⢠⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⣀⣵⠀⠀⢹⣤⣿⠀⠀⠈⢆⠀⢸⠇
⠀⠀⢀⣏⠤⠂⠀⠀⠀⠀⠀⠀⠀⠀⠸⠻⠟⡄⠀⠀⡟⠋⠆⣀⣤⡈⣦⡞⠀
⠀⣠⠟⠁⠀⠀⠀⠀⠀⠀⠀⣴⣶⣦⡄⠣⠴⠁⠀⢀⡌⠒⠀⠛⠛⠁⢸⠀⠀
⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⢸⡇⠀
⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⢔⣲⡿⠉⠛⠒⢄⠀⠀⠀⠀⠀⠀⢸⠀⠀
⠸⣆⡀⠀⠀⠀⠀⢀⡀⢀⠔⠉⠀⠀⠀⠀⠀⠀⠀⠈⡆⠀⠀⠀⠀⢀⡟⠀⠀
⠀⠀⠉⠻⣟⠋⠉⠉⡰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠃⠀⠀⠀⢀⡾⠁⠀⠀
⠀⠀⠀⠀⠙⢦⡀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⣠⠞⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⢾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⡠⢾⠏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⣇⠀⠀⠀⠀⠀⠀⠀⢠⠾⠴⠒⠉⢀⡞⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⢤⣄⣀⡠⠤⠚⠁⠀⠀⠀⣠⠟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡀⠀⠀⠀⣀⡀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⣄⣀⣘⣯⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      `, `color:pink`);

export default App;
