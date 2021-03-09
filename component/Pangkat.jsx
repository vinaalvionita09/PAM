import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Pangkat() {
    const [count, setCount] = useState(1);

    return (
        <view>
            <text>
                Disini kita akan menghitung nilai perpangkatan 2
            </text>

            <Button color="#A52A2A" title='Ayo hitung' onPress={() => setCount(count * 2)} />

            <text>
                Hasil dari perpangkatan adalah = {count}
            </text>

            <Button color="#A52A2A" title='Ulangi perhitungan' onPress={() => setCount(1)} />

        </view>
    );
}