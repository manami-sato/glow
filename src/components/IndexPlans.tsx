import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import contents from '../libs/contents';
import { indexPlans, plans } from '../libs/plans';
import Heading from './Heading';
import OriginalSpacer from './OriginalSpacer';
import Link from './Link';
import PlanCardCopy from './PlanCardCopy';
import PlanCardHeading from './PlanCardHeading';

const IndexPlans: FC = () => {
  return (
    <Box as="section">
      <Heading data={contents[3]} />
      <OriginalSpacer size="104px" />
      <Flex
        as="ul"
        justifyContent="space-between"
        w="80vw"
        maxW="1080px"
        mx="auto"
        sx={{
          flexWrap: {
            base: 'wrap',
            lg: 'nowrap',
          },
          gap: {
            base: '40px 0',
            lg: '24px',
          },
        }}
      >
        {indexPlans.map((item, i) => {
          return (
            <Flex
              as="li"
              key={i}
              flexDirection="column"
              alignItems="center"
              sx={{
                width: {
                  base: '100%',
                  lg: 'calc(100% - 24px * 2 / 3)',
                },
              }}
            >
              <PlanCardCopy data={item.copy} />
              <OriginalSpacer size="20px" />
              <Flex
                textStyle="planCard"
                sx={{
                  width: {
                    base: '100%',
                    sm: '60%',
                    lg: '100%',
                  },
                  padding: {
                    base: '40px 32px',
                    lg: '40px 0',
                  },
                }}
              >
                <PlanCardHeading data={plans[0][i + 1]} />
                <Flex alignItems="flex-end" h="6rem" m="16px 0 8px">
                  <Text as="p" textStyle="planCardPrice">
                    ¥{plans[2][i + 1]}
                  </Text>
                  <Text as="span">/月</Text>
                </Flex>
                <Text fontSize="2.5rem">＋</Text>
                <Text fontSize="1.2rem" lineHeight="1.2rem">
                  初期費用
                </Text>
                <Text fontSize="2.4rem" fontFamily="number" mr="8px">
                  ¥{plans[1][i + 1]}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Text
        w="80vw"
        maxW="1080px"
        mx="auto"
        fontSize="1.2rem"
        mt="24px"
        textAlign="right"
      >
        ※料金は税込表記です。
      </Text>
      <OriginalSpacer size="64px" />
      <Link text="料金プランを詳しく見る" url="/plans" />
    </Box>
  );
};

export default IndexPlans;
