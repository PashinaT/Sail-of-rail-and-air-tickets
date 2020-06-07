package com.example.demo.repos;


import com.example.demo.Entity.Trip;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface TripRepo extends CrudRepository<Trip,Long> {

    @Query(
            value = "SELECT * FROM Trip tr WHERE tr.trip_number = :numberTrip",
            nativeQuery = true)
    Trip findByNumberTrip(@Param("numberTrip") String numberTrip);

}
