// {     
//     document.getElementById('btn01').addEventListener('click',() =>{
//           const li = document.createElement('li');
//           const text = document.querySelector('input');
//           li.textContent = text.value;
//           document.querySelector('ul').appendChild(li);

//           text.value = '';
//           text.focus();
//     });
// }

/* <h2>距離と速度からタイムを計算しよう！</h2> */
{
    const time = (dist,fast) => {
        const timehour1 = dist / fast;
        const timehour2 = Math.floor(timehour1);  // 時間の整数部分を計算
        const timemin1 = timehour1 - timehour2;
        const timemin2 = timemin1 *60;
        const timemin3 = Math.floor(timemin2);  // 分の整数部分を計算
        const timesec1 = timemin2 - timemin3;
        const timesec2 = timesec1 * 60;
        const timesec3 = Math.floor(timesec2);  // 秒の整数部分を計算

        return [timehour2,timemin3,timesec3];
    }

    document.getElementById('btn01').addEventListener('click',() => {
        const p01_01 = document.getElementById('ans01_01');
        const p01_02 = document.getElementById('ans01_02');
        const inp01_01 = document.getElementById('inp01_01').value;
        const inp01_02 = document.getElementById('inp01_02').value;
        const inp01_01n = Number(inp01_01);
        const inp01_02n = Number(inp01_02);
        const times1 = time(inp01_01n,inp01_02n);
        p01_01.textContent = `${inp01_01n} km を 時速 ${inp01_02n} km/h の速度で走ると`;
        p01_02.textContent = `タイムは　　${times1[0]} 時間 ${times1[1]} 分 ${times1[2]} 秒　　です`;
    });


}

{/* <h2>ランニング速度と走行時間からどのくらいの距離走れるか計算しよう！</h2> */}
{
    const distance = (hour,minute,second,speed) =>{
        const ithour1 = second / 60**2
        const ithour2 = minute / 60
        const ithour3 = hour + ithour1 + ithour2
        return ithour3 * speed;
    }

    document.getElementById('btn02').addEventListener('click',() => {
        const p02_01 = document.getElementById('ans02_01');
        const p02_02 = document.getElementById('ans02_02');
        const ip02_01_01 = document.getElementById('inp02_01_01').value;
        const ip02_01_02 = document.getElementById('inp02_01_02').value;
        const ip02_01_03 = document.getElementById('inp02_01_03').value;
        const ip02_02 = document.getElementById('inp02_02').value;
        const ip02_01_01n = Number(ip02_01_01);
        const ip02_01_02n = Number(ip02_01_02);
        const ip02_01_03n = Number(ip02_01_03);
        const ip02_02n = Number(ip02_02);
        const distance1 = distance(ip02_01_01n,ip02_01_02n,ip02_01_03n,ip02_02n);
        p02_01.textContent = `時速  ${ip02_02n}  km/h の速度で  ${ip02_01_01n}　時間　${ip02_01_02n}　分　${ip02_01_03n}　秒　走ると`;
        p02_02.textContent = `走行距離は　　${distance1} Km　　です`;
    });

}
{/* <h2>走行距離とタイムから走行速度を計算しよう！</h2> */}
{
    const speed = (hour,minute,second,dist) =>{
        const ithour1 = second / 60**2
        const ithour2 = minute / 60
        const ithour3 = hour + ithour1 + ithour2
        return dist / ithour3;
    }

    document.getElementById('btn03').addEventListener('click',() =>{
        const p03_01 = document.getElementById('ans03_01');
        const p03_02 = document.getElementById('ans03_02');
        const ip03_01 = document.getElementById('inp03_01').value;
        const ip03_01_01 = document.getElementById('inp03_01_01').value;
        const ip03_01_02 = document.getElementById('inp03_01_02').value;
        const ip03_01_03 = document.getElementById('inp03_01_03').value;
        const ip03_01n = Number(ip03_01);
        const ip03_01_01n = Number(ip03_01_01);
        const ip03_01_02n = Number(ip03_01_02);
        const ip03_01_03n = Number(ip03_01_03);
        const speed1 = speed(ip03_01_01n,ip03_01_02n,ip03_01_03n,ip03_01n);
        p03_01.textContent = `${ip03_01_01n}　時間　${ip03_01_02n}　分　${ip03_01_03n}　秒　　で　　${ip03_01n} Km　　走った場合`
        p03_02.textContent = `走行速度は　時速　${speed1}　Km/h　です。`
    });


}