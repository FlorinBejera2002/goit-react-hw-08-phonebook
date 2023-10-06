import { Container } from '@mui/material';
import { Footer } from './AppFooter.styled';

const AppFooter = () => {
  return (
    <Footer>
      <Container maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
        <p>
          ©2023 Developed by{' '}
          <a
            href="https://github.com/FlorinBejera2002"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
           Florin B.
          </a>
        </p>
      </Container>
    </Footer>
  );
};

export default AppFooter;
