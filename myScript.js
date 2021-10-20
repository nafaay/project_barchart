$(document).ready(function () {
  $(".color").click(function () {
    $("ul").css('display', 'block');
    $("#black").css({ 'background-color': 'black', 'color': 'white' });
  });
  let chooseColor = "";
  let z = "";
  $('li').click(function () {
    $("#black")
      .add("#red")
      .add("#yellow")
      .add("#blue")
      .add("#orange")
      .css({
        'background-color': 'white',
        'color': 'black'
      });
    var x = "#";
    var y = $(this).attr('id');
    z = x + y;
    $(z).css({
      'background-color': 'black',
      'color': 'white'
    });
    chooseColor = y;
  });
  const myForm = document.getElementById("myForm");
  let color;
  let width;
  let data = [];
  options = {
    barColor: "",
    barWidth: 0,
    barHeight: 10,
    barSpacing: 0,
  }
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    color = chooseColor;
    width = document.getElementById("width").value;
    valdata = document.getElementById("valdata").value;

    options.barColor = color;
    options.barWidth = width;


    data = valdata.split(" ");
    newData = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].trim() !== "") {
        newData.push(data[i]);
      }
    }
    data = newData;
    let bar = Array(data.length).fill();
    let valBarD = Array(data.length).fill();


    for (let i = 0; i < data.length; i++) {
      bar[i] = document.createElement("div");
      $(bar[i]).addClass("barClass");
      valBarD[i] = document.createElement("div");
      $(valBarD[i]).addClass("valBarD");
    }
    applyProperties($('#main'), 'border-left', '2px solid black');
    applyProperties($('#main'), 'border-bottom', '2px solid black');
    applyProperties($('#main'), 'height', '400px');
    applyProperties($('#main'), 'width', '400px');

    //applyProperties($('#valBarD'), 'height', '400px');
    //applyProperties($('#valBarD'), 'width', '400px');

    let i = 0;
    let left = 5;
    let height = 0;
    while (i < data.length) {

      height = data[i] * options.barHeight;
      applyProperties($(bar[i]), 'position', 'absolute');
      applyProperties($(bar[i]), 'height', height + 'px');
      applyProperties($(bar[i]), 'width', width + 'px');
      applyProperties($(bar[i]), 'left', left + 'px');
      applyProperties($(bar[i]), 'background', color);
      applyProperties($(bar[i]), 'top', 390 - $(bar[i]).height());

      $(valBarD[i]).text(data[i]);
      applyProperties($(valBarD[i]), 'position', 'absolute');
      applyProperties($(valBarD[i]), 'width', width + 'px');
      applyProperties($(valBarD[i]), 'left', left + 15 + 'px');

      //////

      i++;
      left += 30;
    }
    if ($(".barClass") != null) {
      $(".barClass").remove();
    }

    if ($(".valBarD") != null) {
      $(".valBarD").remove();
    }


    for (let i = 0; i < data.length; i++) {
      document.getElementById("main").appendChild(bar[i]);
    }

    //    for (let i = 0; i < data.length; i++) {
    //      document.getElementById(`valBarD${i + 1}`).appendChild(valBarD[i]);
    //    }
    for (let i = 0; i < data.length; i++) {
      document.getElementById("valBarD").appendChild(valBarD[i]);
    }
  });

  const drawBarChart = function (data, options, element) {
    width = options.width;
    height = options.height;
    color = options.color;
  }

  const applyProperties = function (elem, prop, value) {
    elem.css(prop, value);
  }
});

