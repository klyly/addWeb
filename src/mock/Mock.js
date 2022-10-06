import mockjs from  "mockjs";
const Mock ={
    getOrder(type) {
        let  array = [];
        for (let  i = 0;i < mockjs.Random.integer(5,10); i++){
            array.push(mockjs.mock({
                'name':type == 0 ? '普通商品':"秒杀商品" + i,
                'price':mockjs.Random.integer(20,500) +"元",
                'buyer':mockjs.Random.cname(),
                'time':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'role':mockjs.Random.boolean(),
                'state':mockjs.Random.boolean(),
                'payType':mockjs.Random.boolean(),
                'source':mockjs.Random.url(),
                'phone':mockjs.mock(/\d{11}/)
            }))
        }
        return array;
    }
}
export default Mock;