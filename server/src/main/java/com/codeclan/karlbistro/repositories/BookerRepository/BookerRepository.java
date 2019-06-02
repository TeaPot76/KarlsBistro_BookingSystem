package com.codeclan.karlbistro.repositories.BookerRepository;

import com.codeclan.karlbistro.models.Booker;
import com.codeclan.karlbistro.projections.EmbedBookerWithBookings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedBookerWithBookings.class)
public interface BookerRepository extends JpaRepository<Booker, Long>, BookerRepositoryCustom {



}