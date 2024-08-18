import Heading from "./heading";
import Section from "./Section";

function ExplainContext() {
  return (
    <div>
      <h3>Explaining Context By levels Example</h3>
      <Section>
        <Heading>hello</Heading>
        <Section>
          <Heading>hi</Heading>
          <Section>
            <Heading>hi</Heading>
            <Section>
              <Heading>hi</Heading>
              <Section>
                <Heading>hi</Heading>
                <Section>
                  <Heading>hi</Heading>
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default ExplainContext;
