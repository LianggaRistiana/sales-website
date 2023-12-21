import React, { useEffect, useState } from "react";
import AllStuffComponent from "../UtilComponent/AllStuffComponent";
import { Button, Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CollectionComponent from "../UtilComponent/CollectionComponent";
import SeeAllButton from "../UtilComponent/SeeAllButton";
import { womenStuff } from "@/data-const";
import { menStuff } from "@/data-const";

function HomeStuffComponent() {
  const url = "http://localhost:8000/for-men/stuff";
  const [menStuffs, setMenStuff] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setMenStuff(data.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const url2 = "http://localhost:8000/for-women/stuff";
  const [womenStuffs, setWomenStuff] = useState([]);
  const fetchInfo2= () => {
    return fetch(url2)
      .then((res) => res.json())
      .then((data) => setWomenStuff(data.data));
  };

  useEffect(() => {
    fetchInfo2();
  }, []);
  return (
    <div className="">
      <div id="all-new" className=" mt-20 mb-8 bg-[#D9F0F4] py-4  w-full">
        <div className="flex justify-between  mx-[6rem] ">
          <h1 className="text-[24px] font-bold">New Stuff</h1>
        </div>
        <div className="mx-[6rem]">
          {/* <AllStuffComponent /> */}
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options" variant="underlined">
              <Tab key="For Men" title="For Men">
                <Card>
                  <CardBody>
                    <AllStuffComponent
                      gap={4}
                      large={4}
                      comp={1}
                      items={menStuffs}
                      imagesD={menStuff[0].path}
                    />
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="Fow Women" title="For Women">
                <Card>
                  <CardBody>
                    <AllStuffComponent
                      gap={4}
                      large={4}
                      comp={1}
                      items={womenStuffs}
                      imagesD={womenStuff[0].path}
                    />
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
        <SeeAllButton
          classNamed={`bg-[#000000] text-white`}
          yMargin={4}
          path={`/all-stuff`}
        />
      </div>
    </div>
  );
}

export default HomeStuffComponent;
