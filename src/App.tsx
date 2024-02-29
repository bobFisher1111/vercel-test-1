import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [apiData, setApiData] = React.useState<any>([]);
  const fetchData = () => axios.get('https://website-api-blush.vercel.app/api/v1/students').then(
    (response) => {
      return response;
    }
  ).then((data => setApiData(data.data)))

  useEffect(() => {
    fetchData();
  }, []);
  const data = apiData && apiData;
  return (
    <div>
      <h1>Vercel Proof of concept</h1>
      {data?.map((userInfo: any) => (
        <h1 key={userInfo.id}>{`User Name: ${userInfo.name}`}</h1>
        ))
      }
    </div>
  );
}

export default App;
