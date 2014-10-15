(function(){
	var app = angular.module('thinkalike', [ ]);

	// execute this when ProjectController is called
	app.controller("ProjectController", function(){
		this.projects = projects;
		this.search = "";
	});

	// dummy data for now
	// must be populated from the database
	var projects = [
	{
		"projectId": 0,
		"title": 'Think Alike',
		"description": 'Project Collaboration Website',
		"owner-name": 'Derek',
		"progress": 'panel-warning'
	} , {
		"projectId": 1,
		"title": 'HTML To Go',
		"description": 'Quick HTML generator using UX/UI designs',
		"owner-name": 'John Richards',
		"progress": 'panel-success'
	}, {
		"projectId": 2,
		"title": 'Housing',
		"description": 'Volunteer: Housing Mobile App using Angular.JS',
		"owner-name": 'Jose Valdez',
		"progress": 'panel-danger'
	}] ;

}) ();
