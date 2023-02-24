import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import React from "react";

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
  isDark: boolean;
}
function Chart({ coinId, isDark }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line" // 차트 형식
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close) ?? [], // 데이터를 집어 넣는 곳
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: true,
              },
              background: "transparent",
            },
            grid: { show: true }, // 차트에서 구분선
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: true,
            },
            xaxis: {
              // x 축 눈금
              axisBorder: { show: false },
              axisTicks: { show: true },
              labels: { show: true },
              type: "datetime", // x축 눈금 값을 날짜로 변환
              categories: data?.map((price) => price.time_close), // x 축에 출력되는 데이터
            },
            fill: {
              // 그리데이션 효과 : 두가지색
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] }, // 색이 변하는 위치 조정
            },
            colors: ["#0fbcf9"],
            tooltip: {
              // 차트 곡선에 마우스 올려 놓을 때
              y: {
                formatter: (value) => `$${value.toFixed(2)}`, // 출력되는 값이 소수점 세째자리까지만
              },
            },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
