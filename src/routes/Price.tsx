import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinHistory } from "../api";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

const Container = styled.div`
  padding: 0px 20px;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  padding: 10px;
`;

function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcvv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <Container>
      <CoinsList>
        {data?.map((price) => (
          <Coin>
            {Math.floor(+price.time_close / (1000 * 60 * 60 * 24)) + "일"}
            {String(
              Math.floor((+price.time_close / (1000 * 60 * 60)) % 24)
            ).padStart(2, "0") + "시"}
            {String(
              Math.floor((+price.time_close / (1000 * 60)) % 60)
            ).padStart(2, "0") + "분"}
            {String(Math.floor((+price.time_close / 1000) % 60)).padStart(
              2,
              "0"
            ) + "초"}

            {" : $" + price.close}
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
}

export default Price;
