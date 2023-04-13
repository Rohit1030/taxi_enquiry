import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/Hero/Hero';
import Services from "././components/Services/Services";
import Chooseus from './components/Choose Us/Chooseus';
import Form from './components/Form/Form';
import {BiCopyright} from "react-icons/bi"

function App() {
  return (
    <div className="App" id='app'>
     <Navbar />
     <Hero />
     <section id="about" title='About' className='common-width'>
      <div>
        <h1>ABOUT US</h1>
        <div className="underline"></div>
      </div>
      <p className='common-para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic ut odit placeat doloremque deserunt animi, perferendis id. Amet aspernatur modi laboriosam provident sed odit fugit, facere dignissimos obcaecati neque molestiae nemo laborum ea, velit aut itaque repellat debitis veniam minima commodi quas optio mollitia, sequi officiis. Explicabo totam sed ex quam saepe omnis nostrum nesciunt voluptatibus eos! Laboriosam illo architecto similique iure. Eaque praesentium, repellat similique dolorum corporis odit perspiciatis velit, quo nisi nam repellendus debitis rerum magnam excepturi? Quaerat, id, soluta beatae et voluptas asperiores inventore architecto voluptatum illo harum enim omnis fugiat dignissimos delectus corrupti molestias similique vero quibusdam ex commodi quae, cupiditate nulla corporis. Cumque tenetur excepturi cum, eveniet aut pariatur reiciendis consectetur a ipsam, iusto, totam debitis repellat dolore suscipit unde beatae eos dolorum repudiandae mollitia tempora in natus dicta. Praesentium ex autem modi incidunt porro cupiditate quidem iusto, nihil ducimus veniam nemo quibusdam facilis itaque qui odio aut neque at maxime soluta. Veritatis quas consectetur esse laboriosam nobis illum accusamus fuga nostrum facere dignissimos omnis dolore possimus aperiam aspernatur enim rem exercitationem, voluptates eligendi at. Quaerat error doloribus repellat obcaecati, nesciunt quia quis ullam ipsa unde placeat iusto ducimus laborum consequatur, architecto autem sit!
      </p>
     </section>
     <Services />
     <Chooseus />
     <Form />
     <footer>
        <div className='common-width'>
          <p>Copyright</p>
          <BiCopyright />
          <p>Quick Taxi | Website Design by Rohit Barman</p>
        </div>
       </footer>
    </div>
  );
}

export default App;
