import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Mainboard from './Mainboard';
import unsplash from './api/unsplash';
import db from './firebase';

function App() {
  const [pins, setNewPins] = useState([]);
  // let pins = [];

  const makeAPICall = (term) => {
    // Make an API call
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {query: term}
    });

  };

  const onSearchSubmit = (term) => {
    // console.log(term, 'term at the App.js');
    let promises = [];
    let searchedPins = [];
    // promises.push(makeAPICall(term).then((res) => console.log(res, 'what is in res?')));
    promises.push(makeAPICall(term).then((res) => {
      let results = res.data.results;
      results.map((pin) => {
        // console.log(pin, 'what is in pin')
        searchedPins.push(pin);
      });
    }));

    Promise.all(promises).then(() => {
      // console.log(searchedPins, 'what is in searchedPins');
      setNewPins(searchedPins);
    });
  };
  // console.log(pins, 'what is in pins?');

  const getNewPins = () => {
      let promises = [];
      let pinData = [];

      db.collection('terms').onSnapshot((snapshot) => {
        let snapshotData = snapshot.docs;

        if(snapshotData.length >= 10) {
            
          snapshotData = snapshotData.slice(snapshotData.length - 5, snapshotData.length);
        };

        snapshotData.map((doc) => {

          promises.push(makeAPICall(doc.data().term)
          .then((res) => {
            // console.log(res, 'what is res here?');
            let results = res.data.results;
            results.map((object) => {
              pinData.push(object)
            });

            pinData.sort(function(a, b) {
              return 0.5 - Math.random();
            });
          })
        )
      });
    });
    Promise.all(promises).then(() => {
        setNewPins(pinData);
      });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <Header onSubmit={onSearchSubmit}/>
      </div>
      <div className="app__body">
        <Mainboard pins={pins} />
      </div>
    </div>
  );
}

export default App;
