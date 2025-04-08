const data = [
  {
    id: 1,
    name: "2DOF-Forced-Vib",
    filepath: "./videoSim/2DOF-Forced-Vib.swf",
  },
  {
    id: 2,
    name: "2DOF-Forced-Vib_Expt",
    filepath: "./videoSim/2DOF-Forced-Vib_Expt.swf",
  },
  {
    id: 3,
    name: "2DOF-TMD_ExpL",
    filepath: "./videoSim/2DOF-TMD_ExpL.swf",
  },
  {
    id: 4,
    name: "2DOF-TMD_ExpT",
    filepath: "./videoSim/2DOF-TMD_ExpT.swf",
  },
  {
    id: 5,
    name: "BaseExcitation",
    filepath: "./videoSim/BaseExcitation.swf",
  },
  {
    id: 6,
    name: "BaseExcitation_Expl",
    filepath: "./videoSim/BaseExcitation_Expl.swf",
  },
  {
    id: 7,
    name: "BaseExcitationExpR",
    filepath: "./videoSim/BaseExcitationExpR.swf",
  },
  {
    id: 8,
    name: "Cantilever",
    filepath: "./videoSim/Cantilever.swf",
  },
  {
    id: 9,
    name: "Cantilever_expT_easy",
    filepath: "./videoSim/Cantilever_expT_easy.swf",
  },
  {
    id: 10,
    name: "Cantilever_expT_hard",
    filepath: "./videoSim/Cantilever_expT_hard.swf",
  },
  {
    id: 11,
    name: "Cantilever_expT_medium1",
    filepath: "./videoSim/Cantilever_expT_medium1.swf",
  },
  {
    id: 12,
    name: "Cantilever_expT_medium2",
    filepath: "./videoSim/Cantilever_expT_medium2.swf",
  },
  {
    id: 13,
    name: "Fixed fixed_expT_easy",
    filepath: "./videoSim/Fixed fixed_expT_easy.swf",
  },
  {
    id: 14,
    name: "Fixed Fixed_expT_hard",
    filepath: "./videoSim/Fixed Fixed_expT_hard.swf",
  },
  {
    id: 15,
    name: "Fixed fixed_expT_medium1",
    filepath: "./videoSim/Fixed fixed_expT_medium1.swf",
  },
  {
    id: 16,
    name: "Fixed fixed_expT_medium2",
    filepath: "./videoSim/Fixed fixed_expT_medium2.swf",
  },
  {
    id: 17,
    name: "FixedFixed",
    filepath: "./videoSim/FixedFixed.swf",
  },
  {
    id: 18,
    name: "ForcedVib",
    filepath: "./videoSim/ForcedVib.swf",
  },
  {
    id: 19,
    name: "ForceVib",
    filepath: "./videoSim/ForceVib.swf",
  },
  {
    id: 20,
    name: "FreeVibrationSDOF_expN_ver2",
    filepath: "./videoSim/FreeVibrationSDOF_expN_ver2.swf",
  },
  {
    id: 21,
    name: "Getting started_ver2",
    filepath: "./videoSim/Getting started_ver2.swf",
  },
  {
    id: 22,
    name: "RotatingUnbalance",
    filepath: "./videoSim/RotatingUnbalance.swf",
  },
  {
    id: 23,
    name: "Simply supported_expT_easy",
    filepath: "./videoSim/Simply supported_expT_easy.swf",
  },
  {
    id: 24,
    name: "Simply Supported_expT_hard",
    filepath: "./videoSim/Simply Supported_expT_hard.swf",
  },
  {
    id: 25,
    name: "Simply supported_expT_medium1",
    filepath: "./videoSim/Simply supported_expT_medium1.swf",
  },
  {
    id: 26,
    name: "Simply supported_expT_medium2",
    filepath: "./videoSim/Simply supported_expT_medium2.swf",
  },
  {
    id: 27,
    name: "SimplySupported",
    filepath: "./videoSim/SimplySupported.swf",
  },
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
