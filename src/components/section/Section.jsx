import { MainSection, SectionHeader } from './Section.styled';

export const Section = ({ children }) => {
  return (
    <MainSection>
      <SectionHeader>Feedback section</SectionHeader>
      {children}
    </MainSection>
  );
};
