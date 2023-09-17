
<script>
    let screenOrientation = screen.orientation.type;
  
    const updateOrientation = () => {
      screenOrientation = screen.orientation.type;
      console.log(`The orientation of the screen is: ${screenOrientation}`);
    };
  
    screen.orientation.addEventListener("orientationchange", updateOrientation);
  </script>


<p>The orientation of the screen is: {screenOrientation}</p>
