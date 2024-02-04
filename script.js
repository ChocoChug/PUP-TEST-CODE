function toggleCourses(programId) {
    var coursesContainer = document.getElementById(programId + '-courses');
    var otherCoursesContainer = programId === 'graduate-studies' ? document.getElementById('undergraduate-degrees-courses') : document.getElementById('graduate-studies-courses');
  
    coursesContainer.style.display = coursesContainer.style.display === 'none' ? 'block' : 'none';
    otherCoursesContainer.style.display = 'none';
  }
  
  function toggleDetails(courseId) {
    var details = document.getElementById(courseId + '-details');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
  }
  