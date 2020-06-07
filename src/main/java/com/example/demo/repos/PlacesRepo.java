package com.example.demo.repos;


import com.example.demo.Entity.Place;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PlacesRepo extends CrudRepository<Place,Long> {

    @Query(
            value = "SELECT * FROM Places pl WHERE pl.id = :idPlace",
            nativeQuery = true)
    Place findByIdPlace(@Param("idPlace") String idPlace);

}
