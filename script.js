const data = [
  {
    id: 1,
    name: "EXP 1: Free vibration of cantilever beam-expR",
    filepath: "./videoSim/Cantilever.swf",
  },
  {
    id: 2,
    name: "EXP 1: Cantilever_expT_easy",
    filepath: "./videoSim/Cantilever_expT_easy.swf",
  },
  {
    id: 3,
    name: "EXP 1: Cantilever_expT_medium1",
    filepath: "./videoSim/Cantilever_expT_medium1.swf",
  },
  {
    id: 4,
    name: "EXP 1: Cantilever_expT_medium2",
    filepath: "./videoSim/Cantilever_expT_medium2.swf",
  },
  {
    id: 5,
    name: `EXP 1: Cantilever_expT_hard 
    **********************************`,
    filepath: "./videoSim/Cantilever_expT_hard.swf",
  },
  {
    id: 6,
    name: "EXP 2: Free vibration of simply supported beam",
    filepath: "./videoSim/SimplySupported.swf",
  },
  {
    id: 7,
    name: "EXP 3: Free vibration of fixed beam",
    filepath: "./videoSim/FixedFixed.swf",
  },
  {
    id: 8,
    name: "EXP 4: Forced vibration of SDOF system",
    filepath: "./videoSim/ForcedVib.swf",
  },
  {
    id: 9,
    name: "EXP 5: Base Excitation_Expl",
    filepath: "./videoSim/BaseExcitation_Expl.swf",
  },
  {
    id: 10,
    name: "EXP 6: Rotating Unbalance",
    filepath: "./videoSim/RotatingUnbalance.swf",
  },
  {
    id: 11,
    name: "EXP 7: 2DOF Forced vibration",
    filepath: "./videoSim/2DOF-Forced-Vib.swf",
  },
  {
    id: 12,
    name: "EXP 8: Dynamic Vibration Absorber",
    filepath: "./videoSim/2DOF-TMD_ExpL.swf",
  },
  
  // {
  //   id: 9,
  //   name: "EXP 7: 2DOF Forced vibration_Expt",
  //   filepath: "./videoSim/2DOF-Forced-Vib_Expt.swf",
  // },
  
  // {
  //   id: 11,//not working
  //   name: "2DOF-TMD_ExpT",
  //   filepath: "./videoSim/2DOF-TMD_ExpT.swf",
  // },
  // {
  //   id: 12, //video
  //   name: "BaseExcitation",
  //   filepath: "./videoSim/BaseExcitation.swf",
  // },
 
  // {
  //   id: 7,
  //   name: "EXP 5: Base Excitation_ExpR",
  //   filepath: "./videoSim/BaseExcitationExpR.swf",
  // },
  // {
  //   id: 13,
  //   name: "EXP 3: Free vibration of fixed beam_expT_easy",
  //   filepath: "./videoSim/Fixed fixed_expT_easy.swf",
  // },
  // {
  //   id: 14,
  //   name: "EXP 3: Free vibration of fixed beam_expT_hard",
  //   filepath: "./videoSim/Fixed Fixed_expT_hard.swf",
  // },
  // {
  //   id: 15,
  //   name: "EXP 3: Free vibration of fixed beam_expT_medium1",
  //   filepath: "./videoSim/Fixed fixed_expT_medium1.swf",
  // },
  // {
  //   id: 16,
  //   name: "EXP 3: Free vibration of fixed beam_expT_medium2",
  //   filepath: "./videoSim/Fixed fixed_expT_medium2.swf",
  // },
  
  
  // {
  //   id: 19, //video
  //   name: "ForceVib",
  //   filepath: "./videoSim/ForceVib.swf",
  // },
  // {
  //   id: 19,//video
  //   name: "FreeVibrationSDOF_expN_ver2",
  //   filepath: "./videoSim/FreeVibrationSDOF_expN_ver2.swf",
  // },
  // {
  //   id: 20,//video
  //   name: "Getting started_ver2",
  //   filepath: "./videoSim/Getting started_ver2.swf",
  // },
 
  // {
  //   id: 22,
  //   name: "EXP 2: Simply supported_expT_easy",
  //   filepath: "./videoSim/Simply supported_expT_easy.swf",
  // },
  // {
  //   id: 23,
  //   name: "EXP 2: Simply Supported_expT_hard",
  //   filepath: "./videoSim/Simply Supported_expT_hard.swf",
  // },
  // {
  //   id: 24,
  //   name: "EXP 2: Simply supported_expT_medium1",
  //   filepath: "./videoSim/Simply supported_expT_medium1.swf",
  // },
  // {
  //   id: 25,
  //   name: "EXP 2: Simply supported_expT_medium2",
  //   filepath: "./videoSim/Simply supported_expT_medium2.swf",
  // },
 
];

let currentExperiment = "";
const title = document.querySelector(".title");
const exptList = document.querySelector(".expt-list");
const swfPlayer = document.getElementById("swfPlayer");
const movieParam = document.getElementById("movieParam");
const searchEl = document.querySelector(".search");

searchEl.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const exptItems = document.querySelectorAll(".expt");
  exptItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

function selectExperiment(expt) {
  currentExperiment = expt.name;
  title.innerHTML = expt.name;
  // Create a new object tag dynamically
  const newObject = document.createElement("object");
  newObject.setAttribute("data", expt.filepath);
  newObject.setAttribute("type", "application/x-shockwave-flash");
  newObject.setAttribute("width", "800");
  newObject.setAttribute("height", "600");
  newObject.setAttribute("id", "swfPlayer");

  const newParam = document.createElement("param");
  newParam.setAttribute("name", "movie");
  newParam.setAttribute("value", expt.filepath);

  newObject.appendChild(newParam);

  // Replace the old object with the new one
  const container = document.querySelector(".simulator");
  const oldObject = document.getElementById("swfPlayer");
  container.replaceChild(newObject, oldObject);

  // Highlight current experiment in list
  const items = document.querySelectorAll(".expt");
  items.forEach((item) => item.classList.remove("active"));
  const currentItem = Array.from(items).find(
    (item) => item.textContent === expt.name
  );
  if (currentItem) currentItem.classList.add("active");
}

data.forEach((expt) => {
  const li = document.createElement("li");
  li.className = `${
    expt.name === currentExperiment
  } ? 'expt underline' : 'expt'`;
  li.classList.add("expt");
  li.textContent = expt.name;
  li.addEventListener("click", () => selectExperiment(expt));
  exptList.appendChild(li);
});
