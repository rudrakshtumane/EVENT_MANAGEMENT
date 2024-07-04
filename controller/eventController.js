const express = require('express');
const Event = require('../model/eventModel');


async function createEvent(req,res){
    try{
    const event = new Event(req.body)
     result = await event.save()

    return res.status(200).send({message: "Event created successfully", result})
   }
     catch(error){
       return  res.status(500).send(error)
     }
};
 
async function getEventByUserId(req,res){
    try {
        createdBy = req.query.createdBy;
        const result = await Event.find({createdBy});
        if(!createdBy){
            return res.status(400).send({message : "event not found"});
        }
         res.status(200).send(result);
    } 
        catch (error) {
         res.status(500).send(error); 
    }
};

async function updateEvent(req,res){
  try{
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if(!updatedEvent){
        return res.status(400).send({message : "event not found"});
    }
    res.status(200).send({message : "event updated successfully"});
  }catch(error){
    res.status(500).send(error); 
  }
};

async function deleteEvent(req,res){
    try {
       const result = await Event.findByIdAndDelete(req.params.id);
        return res.status(200).send({message: "Event deleted successfully", result});
     } 
     catch (error) {
    return res.status(500).send(error);
    }
};

async function invites(req,res){
  try{
    const inviteEvent = await Event.findByIdAndUpdate(req.params.id, {$push : {invites : req.body}});
    if(!inviteEvent){
      return res.status(400).send({message : "invitation not found"})
    }
    res.status(200).send({message : "invitation updated successfully"});
  }
  catch(error){
    return res.status(500).send(error);
  }
};

async function RSVP(req,res){
  try{
    const rsvpEvent = await Event.findByIdAndUpdate(req.params.id, {$push : {rsvp : req.body}});
    if(!rsvpEvent){
      return res.status(400).send({message : "invitation not found"})
    }
    res.status(200).send({message : "RSVP updated successfully"});
  }
  catch(error){
    return res.status(500).send(error);
  }
};

module.exports = {
    createEvent,
    getEventByUserId,
    updateEvent,
    deleteEvent,
    invites,
    RSVP
}



