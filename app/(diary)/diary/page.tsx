"use client";

import React, { useState } from "react";

enum Weather {
  SUNNY = "晴れ",
  CLOUDY = "曇り",
  RAINY = "雨",
  SNOWY = "雪",
  SUNNY_CLOUDY = "晴れ時々曇り",
  CLOUDY_RAINY = "曇り時々雨",
}

type Diary = {
  // date: Date;
  weather: Weather;
  food: string;
  event: string;
}

export default function Home() {
  const [dairy, setDairy] = useState<Diary>({ food: "", event: "", weather: Weather.SUNNY });
  const [dairies, setDairies] = useState<Diary[]>([])

  const changeFood = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDairy({ ...dairy, food: e.target.value });
  }
  const changeEvent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDairy({ ...dairy, event: e.target.value });
  }
  const changeWhether = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDairy({ ...dairy, weather: e.target.value as Weather })
  }

  const addDiary = () => {
    setDairies([...dairies, dairy])
    setDairy({ food: "", event: "", weather: Weather.SUNNY })
  }

  return (
    <main>
      <h1>next-typescript-todo</h1>
      <div>
        <div>
          <input
            type="text"
            value={dairy.food}
            onChange={changeFood}
          />
        </div>
        <div>
          <textarea
            value={dairy.event}
            onChange={changeEvent}
          />
        </div>
        <div>
          <select
            value={dairy.weather}
            onChange={changeWhether}
          >
            {Object.values(Weather).map((weather) =>
              <option key={weather} value={weather}>
                {weather}
              </option>)}
          </select>
        </div>

        <button onClick={addDiary}>追加</button>
      </div>

      <div>
        <h2>日記一覧</h2>
        {dairies.map((dairy, index) => (
          <div key={index}>
            <p>天気: {dairy.weather}</p>
            <p>食事: {dairy.food}</p>
            <p>出来事: {dairy.event}</p>
          </div>
        )
        )}
      </div>
    </main>
  );
}
