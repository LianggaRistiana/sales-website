import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import NavbarComponent from "@/components/UtilComponent/NavbarComponent";
import StuffPictureComponent from "@/components/DetailStuffComponent/StuffPictureComponent";
import StuffMainDescComponent from "@/components/DetailStuffComponent/StuffMainDescComponent";
import StuffSecDescComponent from "@/components/DetailStuffComponent/StuffSecDescComponent";
import AnotherStuffComponent from "@/components/DetailStuffComponent/AnotherStuffComponent";
import ScrollToTopButton from "@/components/UtilComponent/ScrollTop";
import FooterComponent from "@/components/UtilComponent/FooterComponent";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [stuffID, setStuffId] = useState(null);
  const [stuffs, setStuffs] = useState([]);

  useEffect(() => {
    if (router.query.id) {
      setStuffId(router.query.id);
    }
  }, [router.query.id]);

  useEffect(() => {
    const fetchData = async () => {
      if (stuffID) {
        try {
          const url = `http://localhost:8000/all-stuff/${stuffID}`;
          const response = await fetch(url);
          
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }

          const data = await response.json();
          setStuffs(data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error state here
        }
      }
    };

    fetchData();
  }, [stuffID]);





  // const router = useRouter();
  // const [stuffID, setStuffId] = useState(null);

  //   useEffect(() => {
  //       if (router.query.id) {
  //           setStuffId(router.query.id);
  //       }
  //   }, [router.query.id]);

  // const url = `http://localhost:8000/all-stuff/${stuffID}`;
  // const [stuffs, setStuffs] = useState([]);
// /////////////////////////////////
  // const fetchInfo = async () => {
  //   if(stuffID){
  //     return await fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setStuffs(data.data));
  //   }
  // };

  const fetchInfo = async () => {
    if (stuffID) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setStuffs(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state here
      }
    }
  };
  // //////////////////////////////////
  // const fetchInfo = async () => {
  //   if (stuffID) {
  //     try {
  //       let dataFetched = false;
  
  //       while (!dataFetched) {
  //         const response = await fetch(url);
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok.');
  //         }
  //         const data = await response.json();
  
  //         if (data.data) {
  //           setStuffs(data.data);
  //           dataFetched = true; // Set dataFetched to true to exit the loop
  //         } else {
  //           // Implement logic for retrying, waiting, or handling the case where data is still empty
  //           // For example, you might want to implement a delay before the next fetch attempt
  //           await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       // Handle error state here
  //     }
  //   }
  // };
  

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="md:mx-48 mx-4">
        <div className="md:flex mt-12 md:justify-center">
          <StuffPictureComponent />
          <StuffMainDescComponent items={stuffs}/>
        </div>
        <StuffSecDescComponent items={stuffs}/>
        <AnotherStuffComponent />
      </div>
      <div className="hidden md:flex">
        <FooterComponent />
      </div>
      <ScrollToTopButton />
    </>
  );
}
