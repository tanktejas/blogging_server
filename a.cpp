 solve(n, k - 1, s - 1, e + 2,dp)  +
        
            solve(n, k - 1, s - 1, e - 2,dp)  +
       
            solve(n, k - 1, s + 2, e + 1,dp)  +
       
            solve(n, k - 1, s + 1, e + 2,dp)  +
      
            solve(n, k - 1, s + 2, e - 1,dp)  +
       
            solve(n, k - 1, s + 1, e - 2,dp);
        