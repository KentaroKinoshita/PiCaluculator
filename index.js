function estimate_pi(n){
    let num_point_circle = 0
    let num_point_total = 0
    for(let i = 0; i < n; i++){
        x = Math.random()
        y = Math.random()
        distance = Math.pow(x, 2) + Math.pow(y, 2);
        if(distance <= 1){
            num_point_circle += 1;
        } 
        num_point_total += 1;
    }
    return console.log(4*num_point_circle/num_point_total)

}

estimate_pi(100000000)