import { FC } from 'react';
import contents from '../libs/contents';
import Heading from './Heading';
import OriginalSpacer from './OriginalSpacer';
import Link from './Link';
import Faq from './Faq';
import { Box } from '@chakra-ui/react';
import { faqType } from '../types/microCms';

type Props = {
  data: faqType[];
};

const IndexFaq: FC<Props> = ({ data }) => {
  return (
    <Box
      as="section"
      textStyle="sectionWidth"
      sx={{
        '&::before': {
          inset: 'auto -120px -200px auto',
          textStyle: 'orangeCircle',
        },
        '&::after': {
          inset: 'auto -64px 0px auto',
          textStyle: 'rainbowCircle',
        },
      }}
    >
      <Heading data={contents[4]} />
      <OriginalSpacer size="104px" />
      <Faq data={data} />
      <OriginalSpacer size="64px" />
      <Link text="よくある質問一覧" url="/faq" />
    </Box>
  );
};

export default IndexFaq;
