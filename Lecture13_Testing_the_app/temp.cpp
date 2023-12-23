#include<bits/stdc++.h>
using namespace std;

vector<long long> memo(200008, 0);

int solve(int n){
    return memo[n];
}

int main(){
    int t;
    cin>>t;

    const long long modularNumber = 1000000007;
    for(long long i=1 ; i<=memo.size(); i++){
        long long lim = 31 - __builtin_clz(i);
        long long sum =0, cnt = 0;

        for(long long j=0; j<lim ; j++){
            if(((1<<j) and i) == 0){
                sum += (1<<j);
                cnt++;
            }
        }
        long long power = 1;
        for(long long j=1; j<cnt; j++){
            power *= 2;
            power %= modularNumber;
        }

        sum *= power;
        sum %- modularNumber;
        sum*= i;
        memo[i] += sum;
        memo[i] += memo[i-1];
        memo[i] %= modularNumber;
    }

    for(int i =0 ; i<t; i++){
        int n ;
        cin >>n ;
        cout << memo[n] << endl;
    }
}