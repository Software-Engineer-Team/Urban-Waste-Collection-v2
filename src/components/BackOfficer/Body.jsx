import {
  BodyContainer,
  BodyContent,
  BodyWrapper,
  BodyImageLayer,
  BodyMain,
} from "./Body.styled";
const Body = () => {
  return (
    <BodyContainer>
      <BodyContent>
        <BodyWrapper>
          <BodyImageLayer>ddddddddd</BodyImageLayer>
          <BodyMain>
            <h2>
              Your Clutter is Our Bread <span>&</span> Butter
            </h2>
            <a href="#">Request a pickup</a>
          </BodyMain>
        </BodyWrapper>
      </BodyContent>
    </BodyContainer>
  );
};

export default Body;
