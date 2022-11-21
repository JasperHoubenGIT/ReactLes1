import React from 'react';
import './App.css';
import Button from "./Components/Button";
import Product from "./Components/Products";
import bag_one from "./assets/bag_1.png"
import bag_two from "./assets/bag_2.png"
import bag_three from "./assets/bag_3.png"
import bag_four from "./assets/bag_4.png"
import Tile from "./Components/Tile";
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <Button />
          <main>
              <Product
              label = "Best seller"
              img = {bag_one}
              title = "The handy bag"
              price={400}
              />

              <Product
                  label = "Best seller"
                  img = {bag_two}
                  title = "The stylish bag"
                  price={250}
              />

              <Product
                  label = "New collection"
                  img = {bag_three}
                  title = "The simple bag"
                  price={300}
              />
              <Product
                  label = "New collection"
                  img = {bag_four}
                  title = "The trendy bag"
                  price={150}
              />

          </main>

          <footer>
              <Tile title={"The Brand"} >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eligendi ex hic illum minima, placeat quod quos repellendus tempora tempore.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa est explicabo, in iure odio placeat saepe ullam velit voluptatum?</p>
              </Tile>
              <Tile img={brand} imgDescription="The brand logo" />
              <Tile img={our_story} imgDescription="The brand logo" />
              <Tile title={"Our story"} >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dignissimos earum esse eveniet fuga impedit ipsam, optio, possimus, quia ratione soluta temporibus velit voluptatum? Impedit, omnis, sit? Animi dolores molestiae nisi quas qui veritatis. Ad in molestiae nulla odit voluptatem.</p>
              </Tile>

          </footer>
      </>
  );
}

export default App;



