import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
             <div class="frame">

                 <h3 id="animal-name">Pikachu</h3>

                 <img src="PIKACHU.JPG" alt="PIKACHU" class="pika" />
				 <p> </p>
                 <div class="bottom">

                         <p id="interesting-facts">Volt Tackle, Thundershock</p>
                         <ul id="no-dots">

                             <li><span class="bolded">Power</span>: Item #1</li>
                             <li><span class="bolded">Attacks</span>: Item #2</li>
                             <li><span class="bolded">Defence</span>: Item #3</li>
                             <li><span class="bolded">Stamina</span>: Item #4</li>
                         </ul>

                         <p>Pikachu is my favourite pokemon</p>
                 </div>
             </div>
         </div>
      );
   }
}
export default App;