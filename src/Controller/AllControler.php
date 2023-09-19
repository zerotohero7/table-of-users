<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpClient\HttpClient;


class AllControler extends AbstractController
{
    #[Route('/home',name:'app_home')]
    public function home(): Response
    {
        $client = HttpClient::create();
        $apiUrl = 'https://jsonplaceholder.typicode.com/users/';
    

        $response = $client->request('GET', $apiUrl);

        $data = $response->toArray();
        
        return $this->render('home.html.twig', [
            'data' => $data,
        ]);
    }

    #[Route('/about' , name:'app_about')]
    public function about(): Response
    {
        
        return $this->render('about.html.twig', []);
    }

    #[Route('/users' , name:'app_users')]
    public function users(): Response
    {      
            $client = HttpClient::create();
            $apiUrl = 'https://jsonplaceholder.typicode.com/users/';
        
        try {
             $response = $client->request('GET', $apiUrl);
 
            $data = $response->toArray();
            

        
            return $this->render('users.html.twig', [
                'data' => $data,
            ]);

        }
        catch (\Exception $e) {
             return $this->render('error_template.html.twig', [
                'error' => $e->getMessage(),
            ]);
        }

    }


    #[Route('/contact' , name:'app_contact')]
    public function contact(): Response
    {
        
        return $this->render('contact.html.twig', []);
    }

    #[Route('/sign-up' , name:'sign-up')]   
    public function signUp(): Response
    {
        return $this->render('connexion/sign-up.html.twig', []);
    }

    #[Route('/log-in' , name:'log-in')]
    public function logIn(): Response
    {
        return $this->render('connexion/log-in.html.twig', []);
    }
    

}