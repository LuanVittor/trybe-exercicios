import staringCat from './staringCat.jpg';
import Image from './image';

function App() {
  return (
    <main>
      <Image source={staringCat} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;