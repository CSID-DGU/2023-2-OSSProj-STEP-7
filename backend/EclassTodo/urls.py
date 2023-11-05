from django.urls import path, include
from .views import Student, idStudent

urlpatterns = [
     path('admin/', admin.site.urls),
    path("student/", Student.as_view()),
    path("student/<int:id>/", idStudent.as_view()),
]