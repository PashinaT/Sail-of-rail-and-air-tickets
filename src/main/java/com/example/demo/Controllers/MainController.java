package com.example.demo.Controllers;


import com.example.demo.Entity.Place;
import com.example.demo.Entity.Trip;
import com.example.demo.repos.PlacesRepo;
import com.example.demo.repos.TripRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("message")
public class MainController {
    @Autowired
    private TripRepo tripRepo;
    @Autowired
    private PlacesRepo placesRepo;

    @GetMapping
    public List<Map<String, String>> list() {
        Iterable<Trip> trips =  tripRepo.findAll();
        trips.forEach(trip -> {
        });
        List<Map<String, String>> tripList = new ArrayList<Map<String, String>>() {{
            for (Trip trip : trips) {
                Place placefrom = placesRepo.findByIdPlace(String.valueOf(trip.getPlaceFrom()));
                Place placeTo = placesRepo.findByIdPlace(String.valueOf(trip.getPlaceTo()));
                add(new HashMap<String, String>() {{ put("id",String.valueOf( trip.getId()));
                put("tripNumber", String.valueOf( trip.getTripNumber()));
                put("placeFrom", String.valueOf(placefrom.getPlaceValue() ));
                put("placeTo", String.valueOf( placeTo.getPlaceValue()));
                put("dateFrom", String.valueOf( trip.getDateFrom()));
                put("dateto", String.valueOf( trip.getDateto()));   }});
            }
        }};
        return tripList;
    }

    @GetMapping("/u/{text}")
    public Map<String, String> getOne(@PathVariable String text) {
        Trip trip =  tripRepo.findByNumberTrip(text);
        if(trip !=null){
            Map <String,String> tripMap = new HashMap<String, String>() {{ put("id",String.valueOf( trip.getId()));
                put("tripNumber", String.valueOf( trip.getTripNumber()));
                put("placeFrom", String.valueOf( trip.getPlaceFrom()));
                put("placeTo", String.valueOf( trip.getPlaceTo()));
                put("dateFrom", String.valueOf( trip.getDateFrom()));
                put("dateto", String.valueOf( trip.getDateto()));   }};
            return tripMap;
        }
        else{
             return null;
        }


    }




}
