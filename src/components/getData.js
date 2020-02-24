import React, { useState } from 'react';
import { item } from './stitchAuth'

getData(){
    // Find database documents
    item.find({})
    .toArray()
    .then(data => 
      data.map(x=>{ return { ...x, id: x._id.toString()}; })
    ).then(data => this.setState({data}))

    // Error logging
    .catch(err => {
      console.warn("Error:", err);
    });
}
