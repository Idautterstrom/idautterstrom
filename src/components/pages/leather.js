import React from "react";
import styled from "styled-components";
import Navbarsub from "../navbarsub";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 70px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 50px;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  background-color: #c3c1b2;
  padding: 100px;
  justify-content: center;
`;

const Image = styled.img`
  display: flex;
  height: 250px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -40px;
  width: 500px;
`;

const Text = styled.p`
  font-family: "gotu", serif;
  font-size: 50px;
  margin-bottom: -10px;
`;

const SmallText = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 20px;
`;

const Leather = () => {
  return (
    <section>
      <Navbarsub />
      <Section>
        <ImageContainer>
          <Image
            src="https://i.ibb.co/GtJwBhW/932798-FE-100-F-45-FF-91-FE-6511085-BF1-AB-352-AD351-4587-46-FF-B9-A3-7466-C01-CD287.jpg"
            alt=""
          ></Image>
          <Image src="https://i.ibb.co/T1xhSxZ/image.jpg" alt=""></Image>
          <Image src="https://i.ibb.co/rM9tmrb/image-2.jpg" alt=""></Image>
          <Image src="https://i.ibb.co/vZVT8YG/IMG-4194.jpg" alt=""></Image>
          <Image
            src="https://i.ibb.co/zFvJkv8/E9-E70-AF0-B213-45-B1-AEDB-AF4-AE4-FDF9-E3-86941-EA2-167-B-4437-AA1-C-948-A9-DC54745-2.jpg"
            alt=""
          ></Image>
          <Image src="https://i.ibb.co/n7693sq/IMG-4586-2.jpg" alt=""></Image>
          <Image
            src="https://i.ibb.co/CMLCyqC/1970-F5-D4-C603-43-EA-96-DC-B1-C09-DB04-D3-C-9-BE4-ECB0-850-C-4974-ABFA-E33-FC6-ED2406-3.jpg"
            alt=""
          ></Image>
          <Image src="https://i.ibb.co/t4538Yb/IMG-4746.jpg" alt=""></Image>
          <Image src="https://i.ibb.co/C2cbKYr/IMG-4940.jpg" alt=""></Image>
        </ImageContainer>
        <TextContainer>
          <Text>Handmade leather products.</Text>
          <SmallText>
            Crafted from vegetable tanned ecological leather. All products are
            made out of post-production waste or leather that have been rejected
            by the tannery. It's a much more sustainable option to newly
            produced leather items.
          </SmallText>
        </TextContainer>
      </Section>
    </section>
  );
};

export default Leather;
