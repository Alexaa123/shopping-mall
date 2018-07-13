import './category.css'
import 'css/common.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import Foot from 'components/Foot'
import mixin from 'js/mixin.js'

let app = new Vue({
    el: '#app',
    data: {
       topLists: null,
       topIndex:0,
       subData: null,
       rankData: null

       

    },
    created(){
        this.getToplists(),
        this.getSubList(0,0),
        this.getRankdata()
       },
  
    methods: {
        getToplists(){
            axios.post(url.topLists).then(res =>{
                this.topLists = res.data.lists
               
                })
            },
        getSubList(id,index){
            this.topIndex = index
            axios.post(url.subLists,{id}).then(res =>{
                    this.subData = res.data.data
                    })

            }
            
          
        ,
        getRankdata(){
            axios.post(url.rankLists).then(res =>{
                this.rankData = res.data.data              
                })
        },
        toSearch(list){
            location.href = `search.html?keyword=${list.name}&id=${list.id}`

        }
        },   
       
    components:{
        Foot
    },
    mixins: [mixin]
    
})