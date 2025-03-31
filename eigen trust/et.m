% Number of peers
num_peers = 50;
num_iterations = 50;
alpha = 0.15;  % Damping factor

% Generate a synthetic trust matrix (random peer interactions)
trust_matrix = randi([-1, 10], num_peers, num_peers);
trust_matrix(trust_matrix < 0) = 0; % Remove negative values (bad interactions)

% Normalize local trust values
for i = 1:num_peers
    total_trust = sum(trust_matrix(i, :));
    if total_trust > 0
        trust_matrix(i, :) = trust_matrix(i, :) / total_trust;
    end
end

% Pre-trusted peers (first 5 peers are assumed to be reliable)
pre_trusted = zeros(num_peers, 1);
pre_trusted(1:5) = 1;  

% Initialize global trust
global_trust = ones(num_peers, 1) / num_peers;

% Power Iteration to compute global trust
for iter = 1:num_iterations
    new_trust = (1 - alpha) * trust_matrix' * global_trust + alpha * pre_trusted;
    new_trust = new_trust / sum(new_trust);
    global_trust = new_trust;
end

% Display Final Trust Scores
disp('Final Trust Scores:');
disp(global_trust);

% Plot trust values
figure;
bar(global_trust);
title('EigenTrust - Final Peer Trust Scores');
xlabel('Peer ID');
ylabel('Trust Score');
grid on;